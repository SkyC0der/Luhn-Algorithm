const luhn_check = require('./index');

describe('luhn_check()', () => {
  test('test_single_digit_strings_can_not_be_valid', () => {
    expect(luhn_check('1')).toEqual(false)
  })
  test('test_a_single_zero_is_valid', () => {
    expect(luhn_check('0')).toEqual(true)
  })
  test('test_a_simple_valid_sin_that_remains_valid_if_reversed', () => {
    expect(luhn_check('059')).toEqual(true)
  })
  test('test_a_simple_valid_sin_that_becomes_invalid_if_reversed', () => {
    expect(luhn_check('59')).toEqual(true)
  })
  test('test_invalid_canadian_sin', () => {
    expect(luhn_check('055 444 286')).toEqual(false)
  })
  test('test_invalid_credit_card', () => {
    expect(luhn_check('8273 1232 7352 0569')).toEqual(false)
  })
  test('test_a_valid_canadian_sin', () => {
    expect(luhn_check('055 444 285')).toEqual(true)
  })
  test('test_invalid_long_number_with_an_even_remainder', () => {
    expect(luhn_check('1 2345 6789 1234 5678 9012')).toEqual(false)
  })
  test('test_valid_number_with_an_even_number_of_digits', () => {
    expect(luhn_check('095 245 88')).toEqual(true)
  })
  test('test_valid_number_with_an_odd_number_of_spaces', () => {
    expect(luhn_check('234 567 891 234')).toEqual(true)
  })
  test('test_valid_strings_with_a_non_digit_added_at_the_end_become_invalid', () => {
    expect(luhn_check('059a')).toEqual(false)
  })
  test('test_valid_strings_with_punctuation_included_become_invalid', () => {
    expect(luhn_check('055-444-285')).toEqual(true)
  })
  test('test_valid_strings_with_symbols_included_become_invalid', () => {
    expect(luhn_check('055# 444$ 285')).toEqual(false)
  })
  test('test_more_than_a_single_zero_is_valid', () => {
    expect(luhn_check('0000 0')).toEqual(true)
  })
  test('test_input_digit_9_is_correctly_converted_to_output_digit_9', () => {
    expect(luhn_check('091')).toEqual(true)
  })
  test(' test_using_ascii_value_for_non_doubled_non_digit_isn_t_allowed', () => {
    expect(luhn_check('055b 444 285')).toEqual(false)
  })
  test('test_using_ascii_value_for_doubled_non_digit_isn_t_allowed', () => {
    expect(luhn_check(':9')).toEqual(false)
  })
})