import logo from './logo.svg';
import './App.css';

function App() {

  const myElement = <h1>This is my second React App</h1>
  const myArray = ["slon", "vau-vau", "ajkula", "bubasarba"]
  const a = 4

  const name = "Will"
  const surname = "Smith"

  const circleArea = (radius) => {

    const area = radius * radius * Math.PI
    return area
  }

  /*const mnogokut = [2, 4, 5, 7, 8]  */
  const opsegMnogokuta = (polygon) => {
    let count = 0

    for (let i = 0; i < polygon.length; i++) {
      count += polygon[i];
    }
    return count

  }

  const noviElement = <p>paragraf</p>

  const prviString = "prvi string"
  const drugiString = "drugi string"


  const korisnici = {
    name: "Jon",
    prezime: "Smith",
    age: 45,
    isLoggedin: true
  }

  const printuser = (first, last) => {
    const concatenate = `Moje ime je ${first}, a moje prezime je ${last}`

    return concatenate
  }

  const bankAccount = 12

  const motorist = {
    firstName: "Marko",
    lastName: "Marić",
    age: 15
  }

  const cars = ["BMW", "Opel", "Toyota"]

  const kandidat = {
    ime: "Pero Perić",
    html: false,
    js: true,
    experience: 1.5,
    it: false
  }

  const brojevi = [3, 5, 7]

  return (
    <>
      {/* <div className="App" style={{ borderColor: "blue", order: 1, backgroundColor: "red" }}>
        <header className="App-header" style={{ backgroundColor: "blue" }}>
          {myElement}
        </header>
      </div> */}
      <div>



        {/* ako zna vise od 5 zivotinja */}

        {
          myArray.length > 5 ?
            <p>Mali ciga doktor</p>
            :
            <p>Mali ciga je neskolovan i laze</p>
        }

        {/* ako imam manje od 13kn */}

        {
          (bankAccount < 13) && <p>Nemas za ulje</p>
        }

        {/*         napraviti objekt person sa imenom, prezimenom i dobi.
        Ako je mladi od 16, ne mozes polagati za motor
 */}





        {
          (motorist.age < 16) && <p>nemozes polagati</p>
        }

        {
          korisnici.age < 65 && `Ne mozete u penziju , do penzije vam treba ${65 - korisnici.age} godina`
        } <br />

        {
          cars.length > 1 && "Treba ti velika garaža"
        } <br /> <br />

        {
          korisnici.isLoggedin ? "ej" : <button>Log In</button>
        } <br />






        Koje životinje poznaješ? - {myArray.join(", ")}<br></br>
        Koliko životinja poznaješ? - {myArray.length}<br></br>
        Kvadrat broja {a} je {Math.pow(a, 2)} <br />
        {/* My name is {name} {surname} */}
        My name is {`${name} ${surname}`} <br />
        Površina kruga koji ima polumjer 4 cm je {circleArea(4)} <br />
        Opseg mnogokuta je {opsegMnogokuta([2, 4, 5, 7, 8])} <br />
        {noviElement} blab <br />
        {`${prviString} ${drugiString}`} <br />
        {printuser(korisnici.name, korisnici.prezime)}


        <h1>Kandidat za FE developera</h1>
        <h2>HTML</h2>

        {
          kandidat.html ?
            <>
              <h2>Zna HTML</h2>

              {
                kandidat.js ?
                  <>
                    <h3>Zna JS</h3>

                    {
                      kandidat.experience >= 2 ?
                        <h4>Ima barem dvije god iskustva</h4>
                        :
                        <>
                          <h4>Nema barem dvije god iskustva</h4>
                          <h5>3200 moja zadnja ponuda</h5>
                        </>
                    }
                  </>
                  :
                  <h3>Ne zna JS</h3>
              }
            </>
            :
            <>
              <h2>Ne zna HTML</h2>
              {
                kandidat.it ?
                  <>
                    <h3>Ides u drugi krug</h3>
                    <h3>ZNa</h3>
                  </>
                  :
                  <>
                    <h3>Ides u bazu</h3>
                    <h3>Ne zna</h3>
                  </>
              }
            </>
        }

        {
          brojevi[0] > brojevi[1] ?

            <h2>Prvi broj je veci</h2>
            :
            <>
              <h2>Drugi broj je veci</h2>
              {
                brojevi[1] > brojevi[2] ?
                  <h3>Drugi broj je najveci</h3>
                  :
                  <h3>Treci broj je najveci</h3>
              }
            </>
        }

      </div>
    </>
  );
}

export default App;
