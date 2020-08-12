include Utils

class SeatController < ApplicationController
  
  def get_seats(array, row, initial_column, target_length, seats)
    while array.length != target_length.to_i()
      distance = Utils.get_adjacent_seat_distance(array.length() - 1)
      p initial_column
      p distance
      current_target_column = initial_column.to_i() + distance.to_i()
      current_target_id = row + current_target_column.to_s()
      
      if seats.dig(current_target_id,"status") == "AVAILABLE"
          array.push(current_target_id)
      else 
          break
      end
    end
    return array
  end
  
  def get_beast_seats(received_data, seats_number) 
    possible_rows = "abcdefghijklmnopqrstuvwxyz".split("")
    seats = received_data["seats"]
    
    rows = received_data.dig("venue", "layout", "rows").to_i()
    columns = received_data.dig("venue","layout","columns").to_i()

    row_center = Utils.get_list_middle(columns)

    rows.times do |i|
        current_row_center = possible_rows[i] + row_center.to_s()
        if seats.dig(current_row_center,"status") == "AVAILABLE"
            best_seats = get_seats([current_row_center],possible_rows[i], current_row_center, seats_number, seats)

            if best_seats.length() == seats_number
                return best_seats
            end
        end
        
        # FIX
        # the naming of this isn't accurate
        row_center.times do |j|
            right_neighbor_column = (row_center + j)
            right_neighbor_position = possible_rows[i] + right_neighbor_column.to_s()

            if seats.dig(right_neighbor_position,"status") == "AVAILABLE"
                best_seats = get_seats([right_neighbor_position],possible_rows[i], right_neighbor_column, seats_number, seats)

                if best_seats.length() == seats_number.to_i()
                    return best_seats
                end
                
            end

            left_neighbor_column = (row_center - j)
            left_neighbor_position = possible_rows[i] + left_neighbor_column.to_s()

            if seats.dig(left_neighbor_position,"status") == "AVAILABLE"
                best_seats = get_seats([left_neighbor_position],possible_rows[i], left_neighbor_column, seats_number, seats)

                if best_seats.length() == seats_number.to_i()
                    return best_seats
                end
            end 
        end
    end
    
    return nil

  end
  
  def find_best
    error = Utils.error_validator(params, ["seats_number", "venue_info"])
    if error
      render json: error.to_json, status: :bad_request
    else
      if params["seats_number"].to_i() > params.dig("venue_info","venue","layout","columns").to_i()
        render json: {"error": "requested seats_number cannot be bigger than the number of columns in venue's layout"}.to_json, status: :bad_request
        return
      end
      
      rows = params.dig("venue_info", "venue", "layout", "rows")
      columns = params.dig("venue_info", "venue", "layout", "columns" )
      
      if rows.to_i() == 0 or columns.to_i() == 0
        render json: {"params" => {"rows" => rows, "columns" => columns}, "error": "rows and columns (inside layout) should be a valid number, bigger than 0"}.to_json, status: :unprocessable_entity
        return
      end

      if rows.to_i() > 23
        render json: {"params" => {"rows" => rows, "columns" => columns}, "error": "rows parameter should be a number bigger than 0 and smaller than 24"}.to_json, status: :unprocessable_entity
        return
      end
      
      suggested_seats = get_beast_seats(params["venue_info"], params["seats_number"])

      if suggested_seats
        render json: {"suggested_seats" => suggested_seats}.to_json, status: :ok
      else
        render json: {"suggested_seats" => [], "message": "Couldn't find #{params["seats_number"]} seats next to each other in the same row"}, status: :ok
      end
    end
    
  end

end
