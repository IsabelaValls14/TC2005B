/**
 * Simple Functions to determine the date of day 
 * 
 * Isabela Valls Chavez
 * 26/03/2025
 */

"use strict";

export function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function monthDays(month, year) {
    if(month === 2 && isLeap(year)) {
        return 29;
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

export function nextDay(day, month, year) {
    day++;
    if (day > monthDays(month, year)) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    }
    
    return [day, month, year];
}