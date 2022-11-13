<?php
/* Challenge 2 - PHP CODE 
Given an array a[] of size N which contains elements from 0 to N-1, you need to find all
the elements occurring more than once in the given array
*/
$a = [];
$output = [];
$outputTwo = [];
function findDuplicates(...$a){
    // array unique array method will remove the unique values from an array
    return array_unique($a);
}

$values = findDuplicates(12,12,45,45,30);
$values = implode(" ",$values);
echo "{$values} occur more than once in the given array";