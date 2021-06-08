
// const number0fFilms = +prompt('Nechta kino tomosha qilgansiz?', '');

// const personalSovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat:false
// };

// const a = prompt('Eng sevimli aktyoringiz?', ''),
//       b = prompt('Uni nechi bahoga baholaysiz?', ''),
//       c = prompt('Ohirgi tomosha qilgan kino nomi2?', ''),
//       d = prompt('Nechi bohoga boholaysiz2?', '');


// personalSovieDB.actors[a] = b;
// personalSovieDB.movies[c] = d;

// console.log(personalSovieDB);

const abbosName = prompt('Isminhiz nima?', '');

const abbosobj = {
    name1: abbosName,
    yosh: {},
    joy: {},
    soha: {},
    getjob: {},
    isM: {}
};

const a = prompt('Yoshingiz nechida?', ''),
      a1 =prompt('Tugilgan joyingiz?', ''),
      b = prompt('Turar joyingiz?', ''),
      b1 =prompt('Aynan qayerda?', ''),
      c = prompt('Sohangiz nima?', ''),
      c1 =confirm('Malakangiz bormi?'),
      d = confirm('Ishlaysizmi yoki yoqmi?'),
      e = prompt('Uylanganmisiz?', ''),
      e1 =prompt('Nechinchi yilda?', '');

abbosobj.yosh[`Yoshi  ${a}da`] = a1;
abbosobj.joy[b] = b1;
abbosobj.soha[c] = c1;
abbosobj.getjob[d];
abbosobj.isM[e] = e1;

console.log(abbosobj);

