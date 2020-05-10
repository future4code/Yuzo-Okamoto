export const objetosEx3 = () => {
    
    // grava as informações do filme em um objeto
    const favMovie = {
        title: "Tropic Thunder",
        year: 2008,
        director: "Ben Stiller",
        cast: ["Ben Stiller", " Robert Downey Jr", " Jack Black"]
    };

    // exibe os dados do objeto gravado
    console.log(`Venha assistir ao filme ${favMovie.title}, de ${favMovie.year}, dirigido por ${favMovie.director} e estrelado por ${favMovie.cast}.`);
}