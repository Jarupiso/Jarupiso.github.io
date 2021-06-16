function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const msg1 = `<p class="animation mb-0 text-truncate">makasih owner udah ngizinin recode >\\<</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">yg recode ganteng</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">teruntuk Arbi, yahahah mitik 430</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">semangat mainnya ges</p>`;
    const msg5 = `<p class="animation mb-0 text-truncate">kalo main jangan suka troll ya kayak temanku</p>`;
    const msg6 = `<p class="animation mb-0 text-truncate">Jangan lupa istirahat !</p>`;
    const msg7 = `<p class="animation mb-0 text-truncate">Ingat, WR hanyalah angka</p>`;
    const msg8 = `<p class="animation mb-0 text-truncate">belum mitik?</p>`;
    const msg9 = `<p class="animation mb-0 text-truncate">semangat pushya</p>`;
    const msg10 = `<p class="animation mb-0 text-truncate">Solo player?</p>`;
    const msg11 = `<p class="animation mb-0 text-truncate">Yang sabar ya kalo ketemu troll</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11];
    let arrayMax = 11;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}
