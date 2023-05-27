package com.bilport.demo.domain.model;

import java.util.Random;

public class PasswordGenerator {

    private static final int PASSWORD_LENGTH = 8;

    private static final String UPPER_CASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String LOWER_CASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
    private static final String NUMBERS = "0123456789";
    private static final String SPECIAL_CHARS = "!@#$%&*()_-<>?";

    public static String generatePassword(){
        StringBuilder password = new StringBuilder();
        Random rand = new Random();
        
        // Add at least one character from each character set
        password.append(getRandomChar(UPPER_CASE_CHARS, rand));
        password.append(getRandomChar(LOWER_CASE_CHARS, rand));
        password.append(getRandomChar(NUMBERS, rand));
        password.append(getRandomChar(SPECIAL_CHARS, rand));

        // Add remaining characters randomly
        for (int i = 4; i < PASSWORD_LENGTH; i++) {
            String charSet = getRandomCharSet(rand);
            password.append(getRandomChar(charSet, rand));
        }

        // Shuffle the password to make it more random
        for (int i = 0; i < password.length(); i++) {
            int swapIndex = rand.nextInt(password.length());
            char temp = password.charAt(i);
            password.setCharAt(i, password.charAt(swapIndex));
            password.setCharAt(swapIndex, temp);
        }

        return password.toString();
    }

    private static char getRandomChar(String charSet, Random random) {
        int randomIndex = random.nextInt(charSet.length());
        return charSet.charAt(randomIndex);
    }

    private static String getRandomCharSet(Random random) {
        int randomIndex = random.nextInt(4);
        switch (randomIndex) {
            case 0:
                return UPPER_CASE_CHARS;
            case 1:
                return LOWER_CASE_CHARS;
            case 2:
                return NUMBERS;
            case 3:
                return SPECIAL_CHARS;
            default:
                return "";
        }
    }
    /*
    public static void main(String[] args) {
        int passwordLength = 12;
        String password = generatePassword();
        System.out.println("Random password: " + password);
    }
     */
}
