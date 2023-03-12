// Async-Await İle Yapımı

const films = [
    { filmName: 'Yüzüklerin Efendisi', time: '4.5' },
    { filmName: 'Soysuzlar Çetesi', time: '2.3' },
    { filmName: 'Esaretin Bedeli', time: '2.4' },
]

const filmList = () => {
    films.map((item) => {
        console.log(`Film Adı: ${item.filmName} || Film Süresi: ${item.time} saat`);
    })
}

const createFilm = (newFilm) => {
    return promise = new Promise((resolve, reject) => {
        films.push(newFilm);
        resolve(films);
        reject('Bağlantı Hatası...');
    })
}

async function infoFilm() {
    try {
        await createFilm({ filmName: 'Zamana Karşı', time: '1.2' });
        filmList();
    }
    catch (err){
        console.log(err);
    }
}

infoFilm();

/*
Promise İle Yapımı

createFilm({ filmName: 'Zamana Karşı', time: '1.2' })
    .then(() => {
        console.log('Yeni Liste\n');
        filmList();
    }).catch((err) => {
        console.log(err);
    })
*/

/*
Callback functions 

const createFilm = (newFilm,callback) => {
        films.push(newFilm); 
        callback();
}

createFilm ({ filmName: 'Zamana Karşı', time: '1.2' },filmList);
*/

