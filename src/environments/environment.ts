// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverEndpoint: 'https://rate-my-restaurant-api.herokuapp.com/',
  /**
   * Get all restaurants in radius
   * Required rarameters: lat, lng, radius: number
   */
  restaurantsAreaSearchEndpoint: '/restaurants/areaSearch', // /areaSearch?lat=&lng=&radius&type=
  /**
   * Get restaurant details. Complete endpoint: '/restaurants/{restaurantID}/'
   */
  restaurantsEndpoint: '/restaurants',
  /**
   * Get all ingredients
   */
  ingredientEndopoint: '/ingredients',
  /**
   * Post new ingredient type { 'id': '', 'name': ''}
   */
  ingredientAddEndpoint: '/ingredients/add',
 
  ratingEndpoint: '/ingredientRatings', //  - string
  /**
   * Post NewUser credentials { username: '', password: ''} // more in the future...
   */
  registerEndpoint: '/register',
  /**
   * Post User credentials { username: '', password: ''}
   */
  registerToApiEndpoint: '/api/register', // in-development
  /**
   * Post Updated restaurant information (PlaceDetailsData)
   * {
   *  'id': 'string',
   * 'name': 'string',
   * 'location': [ 'lat': '', 'lng': ''],
   * 'newlyCreated':'boolean',
   * 'foodTypes': [ ],
   * 'ingredientRatings': [ ]
   * }
   */
  restaurantSaveEndpoint: '/restaurants/save',
  /**
   * WiP!
   * Get restaurants by foodType. Use '/restaurant/type/{foodType}'
   */
  restaurantByFoodEndpoint: '/restaurant/type/',
  /**
   * Get all food types
   */
  restaurantFoodTypesEndpoint: '/foodTypes'
};

