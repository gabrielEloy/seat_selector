require 'test_helper'
require_relative './seat_conroller_mocks'

class SeatControllerTest < ActionDispatch::IntegrationTest
  venue_info = VenueLayoutMocks::OPEN_FRONT_ROW_JSON
  
  test "should successfully send a post request to find-best" do
    params = {"venue_info" => venue_info, "seats_number" => 1}
    post seat_find_best_url, params: params
    assert_response :success
  end
  
  test "It should fail when requesting a number of seats bigger than the venue's row" do
    params = {"venue_info" => venue_info, "seats_number" => 13}
    post seat_find_best_url, params: params
    assert_response :bad_request
  end
  
  test "It should return the expected result when requesting a single seat" do
    params = {"venue_info" => venue_info, "seats_number" => 1}
    post seat_find_best_url, params: params

    assert_equal JSON.parse(response.body), {'suggested_seats' => ["a6"]}
  end
  
  test "It should return the expected result when requesting multiple seats" do
    params = {"venue_info" => venue_info, "seats_number" => 3}
    post seat_find_best_url, params: params

    assert_equal JSON.parse(response.body), {'suggested_seats' => ["a6","a5","a7"]}
  end

end
