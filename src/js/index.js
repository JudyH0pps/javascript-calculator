const setEvent = () => {
    const $calculator = document.querySelector(".calculator");
    $calculator.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("digit")) {
            plusDigit(target.innerHTML);
        }
        if (target.classList.contains("modifier")) {
            resetNumber();
        }
        if (target.innerText === "=") {
            calculate();
        } else if (target.classList.contains("operation")) {
            setOp(target.innerText);
        }
    });
};

const resetNumber = () => {
    const nextState = {
        nums: [0, 0],
        op: "",
    };
    setState(nextState);
};

const plusDigit = (number) => {
    let nums = state.nums;
    if (state.op === "" && nums[0] < 100) {
        nums[0] = nums[0] * 10 + number * 1;
    } else if (state.op !== "" && nums[1] < 100) {
        nums[1] = nums[1] * 10 + number * 1;
    }
    setState({ nums })
};

const setOp = (op) => {
    setState({ op });
}

const calculate = () => {
    let result = state.nums[0];
    switch (state.op) {
        case '+':
            result = state.nums[0] + state.nums[1];
            break;
        case '-':
            result = state.nums[0] - state.nums[1];
            break;
        case 'X':
            result = state.nums[0] * state.nums[1];
            break;
        case '/':
            result = Math.floor(state.nums[0] / state.nums[1]);
    }
    setState({ nums: [result, 0], op: "" })
}

const render = () => {
    const $display = document.querySelector("#total");
    let display = state.nums[0];
    if (state.op !== "") display += state.op;
    if (state.op !== "" && state.nums[1] !== 0) display += state.nums[1];
    $display.innerText = display;
};

const setState = (nextState) => {
    state = { ...state, ...nextState };
    render();
};

let state = {
    nums: [0, 0],
    op: "",
};

setEvent();
render();
