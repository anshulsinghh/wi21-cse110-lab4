1. var has no block scoping, so line 11 will print the length of the prices array
2. discounted price is a var, so it will be in scope on line 12. line 12 will just print the last computed discounted price in the prices array.
3. final price is a var (and was declared outside the for loop), so it will be in scope on line 13. line 13 will print the same thing as line 12 (last computed discounted price).
4. [ 50, 100, 150 ] will be returned, which is the same as the input array except all values are halved.

5. the program will have an error, as the variable i is not in scope.
6. line 12 is unreachable as line 11 has the error. assuming that line 11 didn't have an error, line 12 would still have an error because discountedPrice is not in scope.
7. line 13 is unreachable as line 11 and 12 have errors. assuming the errors weren't there, line 13 would print out the final discounted price calculated int he for loop - as the finalPrice variable will be in scope.
8. nothing is returned by the function, as it has an error at line 11 which terminates the entire program.

9. line 11 is unreachable, as the program will have an error on line 7, where finalPrice is attempted to be assigned. assuming the errors were fixed, line 11 would still have an error as i is not in scope.
10. line 12 is unreachable, as the program will have an error on line 7, where finalPrice is attempted to be assigned. assuming all errors were fixed, line 12 would print the final calculated discounted price.
11. line 13 is unreachable, as the program will have an error on line 7, where finalPrice is attempted to be assigned. line 8, where final price is assigned a value - would have to be fixed to allow the program to run.
12. nothing is returned by the function, as line 7 causes the program to terminate.

13a. student.name
13b. student['Grad Year']
13c. student.greeting()
13d. student['Favorite Teacher'].name
13e. student.courseLoad[0]

14a. The output will be '32' as 2 is concatenated to '3'.
14b. The output will be 1, as '3' is treated as an integer for 2 to be subtracted from.
14c. The output will be 3 as null is converted to a 0.
14d. Output will be '3null' as null  is treated as a string 'null'.
14e. Ouptut will be 4, as true is treated as a 1 and added to 3.
14f. Output will be 0, as false is numerically converted to 0.
14g. Output will be "3undefined" as undefined is casted to a string.
14h. Output will be NaN as the operation 3 - undefined is not defined.

15a. This returns true, as the ascii value of '2' is greater than 1.
15b. The first characters of each strings are '2' and '1' and since '2' > '1' the output for '2' < '12' is false.
15c. '2' is treated as the number 2, and this returns true.
15d. === is checking for an exact type match, and 2 != '2' in this context.
15e. true is converted to 1 which is not equal to 2. this returns false.
15f. Boolean(2) returns true, which makes true === true - true in this case.

16. === is checking for a type match alongside equality, meaning if the compared values are of different types === returns false. == is not doing a strict type check.

17. 'How are you?' is printed. This is because 2 == true returns false, so the else if condition is checked. 2 != 0, so the second condition is met and how are you is printed. Because the else if statement held true, the else statement is not reached, and goodbye is never printed.

19. The result will be [6, 8, 10]. This is because modifyArray is called with the callback function doSomething (which also requires a callback function). doSomething returns a new array (newArr) where each value in newArr is the result of doSomething(num, function(x){return x*2;}). All do something returns is just (num+2)*2. Which yields the final result.

21. The output is 1, 4, 3, 2