require 'test_helper'
require 'utils'

include Utils

class UtilsTest < ActiveSupport::TestCase
    test "get_list_middle < it return the rigth list_middle for an even number" do
        list_middle = Utils.get_list_middle(9)
        assert_equal list_middle, 5
    end
    
    test "get_list_middle < it return the rigth list_middle for an odd number" do
        list_middle = Utils.get_list_middle(10)
        assert_equal list_middle, 5
    end

    test "get_adjacent_seat_distance < it should return a positive number to an odd input" do
        distance = Utils.get_adjacent_seat_distance(3)
        assert(true, distance > 0) 
    end
    
    test "get_adjacent_seat_distance < it should return a negative number to an even input" do
        distance = Utils.get_adjacent_seat_distance(4)
        assert(true, distance < 0) 
    end

    test "error_validator < it should return nil for a hash containing all the required fields" do
        mock_hash = {"test" => "test", "tested" => "true"}
        errors = Utils.error_validator(mock_hash, ["test", "tested"])

        assert_nil errors
    end
    
    test "error_validator < it should return an error indicating all missing properties" do
        mock_hash = {"test" => "test", "tested" => "true"}
        errors = Utils.error_validator(mock_hash, ["car", "age"])

        assert_equal errors, {"error" => "Missing required properties: car,age"}
    end

end