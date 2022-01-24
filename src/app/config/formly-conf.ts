import { FormlyFieldConfig } from '@ngx-formly/core';

const VALIDATION_VALUES = {
  MIN_MOVIE_RATING: 1,
  MAX_MOVIE_RATING: 10,
  MIN_ADD_MOVIE: 1888,
  MAX_ADD_MOVIE: 2022,
};

export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  MIN_MAX__MOVIE_RATING: `You need to provide rating between ${VALIDATION_VALUES.MIN_MOVIE_RATING} and ${VALIDATION_VALUES.MAX_MOVIE_RATING}`,
  MIN_MAX__ADD_MOVIE: `You need to provide year between ${VALIDATION_VALUES.MIN_ADD_MOVIE} and ${VALIDATION_VALUES.MAX_ADD_MOVIE}`,
};

export const MOVIE_RATING_FIELDS_CONFIG: FormlyFieldConfig[] = [
  {
    key: 'rate',
    type: 'input',
    templateOptions: {
      type: 'number',
      label: 'Rating',
      required: true,
      min: VALIDATION_VALUES.MIN_MOVIE_RATING,
      max: VALIDATION_VALUES.MAX_MOVIE_RATING,
    },
    validation: {
      messages: {
        min: VALIDATION_MESSAGES.MIN_MAX__MOVIE_RATING,
        max: VALIDATION_MESSAGES.MIN_MAX__MOVIE_RATING,
      },
    },
  },
];

export const ADD_MOVIES_FIELDS_CONFIG: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: 'Name',
      required: true,
    },
    focus: true,
  },
  {
    key: 'year',
    type: 'input',
    templateOptions: {
      type: 'number',
      label: 'Year',
      required: true,
      min: VALIDATION_VALUES.MIN_ADD_MOVIE,
      max: VALIDATION_VALUES.MAX_ADD_MOVIE,
    },
    validation: {
      messages: {
        min: VALIDATION_MESSAGES.MIN_MAX__ADD_MOVIE,
        max: VALIDATION_MESSAGES.MIN_MAX__ADD_MOVIE,
      },
    },
  },
];
