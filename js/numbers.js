function complete(number) {
    if (number.value.length == 0)
        number.value = '(' + number.value;
    if (number.value.length == 3)
        number.value = number.value + ') ';
    if (number.value.length == 10)
        number.value = number.value + '-';
}