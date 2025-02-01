Credit Card Validation Regex Patterns

This section explains the regular expressions used to validate Visa and MasterCard credit card numbers in the provided JavaScript program.

Visa Card Pattern: /^4\d{12}(\d{3})?$/
^: Asserts the start of the string.
4: Indicates that the Visa card number must start with the digit 4.
\d{12}: Matches exactly 12 digits (where \d represents any digit from 0-9).
(\d{3})?: An optional group that matches 3 additional digits, making a total of 16 digits if present.
$: Asserts the end of the string.
This pattern allows for Visa card numbers that are either 13 or 16 digits long.

MasterCard Pattern: /^5[1-5]\d{14}$/
^: Asserts the start of the string.
5: Indicates that the MasterCard number must start with the digit 5.
[1-5]: Specifies that the second digit can be any number from 1 to 5, covering MasterCard numbers ranging from 51 to 55.
\d{14}: Matches exactly 14 digits (0-9), ensuring a total of 16 digits.
$: Asserts the end of the string.
This pattern validates MasterCard numbers that are exactly 16 digits long.

Conclusion
The regex patterns effectively validate the format of Visa and MasterCard credit card numbers, ensuring they follow the standard conventions for each card type.
