'use strict'

const e = React.createElement;

class MarkSixResult extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {result : "HELLO"};
        this.state = {result : this.getResult()};
    }

    getResult() {
        const url = new URL(window.location.href);
        const from = 1;
        const to = 49;
        let n = Number(url.searchParams.get("n")) || 6;
        console.log(n);
        let numList = []
        let result = []
        let len = to - from + 1;
        for (let i = from ; i < to + 1; i++) {
            numList.push(i);
        }
        for (let i = 0; i < n; i++) {
            let rand = Math.floor(Math.random() * len);
            result.push(numList[rand]);
            numList[rand] = numList[len - 1];
            len--;
        }
        return result.sort((a, b) => a - b).join(", ");
    }

    render() {
        return e(
            'span',
            null,
            this.state.result
        )
    }
}

const domContainer = document.querySelector('#app-root');
ReactDOM.render(e(MarkSixResult), domContainer);