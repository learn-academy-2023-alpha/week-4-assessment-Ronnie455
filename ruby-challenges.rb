# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
#Pseudocode:

# input - create a method with the variable even_or_odd and pass an argument into the parantheses called num
# output - check to see if the number is even or odd
# first create the method using the variable and argument. Create if statement using a modulo to check if the num evenly goes into 0. If it does the num is even. If not, the num is odd. Create return statement for bot odd and even using string interpolation.
# Print for each num provided using the variable.

num1 = 7
num2 = 42
num3 = 221
def even_or_odd(num)
    if num % 2 == 0
        return "#{num} even"
    else
        return "#{num} is odd"
    end
end
p even_or_odd(num1)
p even_or_odd(num2)
p even_or_odd(num3)
# Expected output: '7 is odd'
#output: "7 is odd"
# Expected output: '42 is even'
#output: "42 even"
# Expected output: '221 is odd'
#"221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# output: "Rbbr Sl"
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# output: 'Sgt Pppr'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# output: 'bby Rd'
# Expected output: 'bby Rd'
def vowel_remover(str)
    str.delete'aeiouAEIOU'
end
p vowel_remover(beatles_album1)
p vowel_remover(beatles_album2)
p vowel_remover(beatles_album3)
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'

# Expected output: 'Racecar is a palindrome'
# output: "Racecar is not a palindrome"
# BUT by changing the lowercase r to a capitalized R it will come back as a palindrome.
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
# output: "LEARN is not a palindrome."
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
# Output: "Rotator is not a palindrome"
# Same thing as racecar. By changing the lower case r to a uppercase R it will read RotatoR is a palindrome.

def palindrome?(string)
    if string == string.reverse
        return "#{string} is a palindrome"
    else
        return "#{string} is not a palindrome."
    end

end
p palindrome?(palindrome_tester1)
p palindrome?(palindrome_tester2)
p palindrome?(palindrome_tester3)