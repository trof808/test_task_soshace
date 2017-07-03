import $ from 'jquery';

export const getCategories = () => {
   return new Promise(function(resolve, reject) {
        $.get('/category')
            .done(res => resolve(res))
            .fail(error => reject(error))
   });
}