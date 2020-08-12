module Utils
    def get_list_middle(number)
    return number % 2 == 0 ? number / 2 : (number / 2.0).ceil
    end
    
    # this function will transform an array index into a
    # distance from the center
    # each even number (and 0) will return a distance to the left
    # and each odd number will return a distance to the right
    def get_adjacent_seat_distance(number)
        return number % 2 == 0 ? -((number/2).ceil + 1): (number/2.0).ceil
    end
    
    def error_validator(validatedInfo, required_properties)
        missing_properties = [] 
        required_properties.each do | property |
            if !validatedInfo[property]
                missing_properties.push(property)
            end
        end

        if missing_properties.length > 0
            missing_properties_string = ''

            missing_properties.each do | prop |
                missing_properties_string += prop + ','
            end

            return {"error" => "Missing required properties: #{missing_properties_string[0...-1]}"}
        end

        return nil
    end

end