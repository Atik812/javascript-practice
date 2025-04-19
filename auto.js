const element = document.querySelector('h1 span')
const element1 = document.querySelector('h2 span')
const wordlist = ['Developer!', 'Coder!', 'Trader!', 'YouTuber!'];
const wordlist2 = ['Student!','Dancer!','Director!','Actor!'];

var interval = 0;
// var interval1 = 0;
// const interval1 = 2;

function Autotype(wordlist, element, interval) {
  
    let skipupdate = 0;
    let wordIndex = 0;
    let characterIndex = 0;
    let reversetype = false;
    const input = setInterval(() => {
        if (skipupdate) {
            skipupdate--;
            return
        }
        if (!reversetype) {
            skipupdate = 2
            element.innerText = element.innerText + wordlist[wordIndex][characterIndex]
            characterIndex++;
        } else {
            element.innerText = element.innerHTML.slice(0, element.innerText.length - 1)
            characterIndex--;
        }
        if (characterIndex == wordlist[wordIndex].length) {
            skipupdate = 8
            reversetype = true;

        }
        if (element.innerText.length === 0 && reversetype) {

            reversetype = false;

            wordIndex++;
        }


        if (wordIndex === wordlist.length) {
            wordIndex = 0;
        }
    }, 100*interval); 
}
Autotype(wordlist , element ,2)
Autotype(wordlist2 , element1,5)
