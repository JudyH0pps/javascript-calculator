const setEvent = () => {
    const $calculator = document.querySelector(".calculator");
    $calculator.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains("digit") || target.classList.contains('operation') && target.innerText !== '=') {
            plusDigit(target.innerHTML);
        }
        if (target.classList.contains("modifier")) {
            resetNumber();
        }
        if (target.innerText === '=') {
            calculate();
        }
    });
}

const resetNumber = () => {
    setState({ display: '0' })
}

const plusDigit = (number) => {
    let display = state.display;
    if (display === '0') {
        display = number;
    } else {
        display = display + number;
    }
    setState({ display });
}

const render = () => {
    const $display = document.querySelector("#total");
    $display.innerText = state.display;
}

const setState = (nextState) => {
    state = { ...state, ...nextState }
    render();
}

let state = {
    idx: 0,
    num1: '0',
    num2: ''
};

setEvent();
render();