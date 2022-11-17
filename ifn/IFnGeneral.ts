interface IFnGeneral {
    (input: number): number;
}

const decorator = (name: string, fn: IFnGeneral) => {
    return (input: number) => {
        console.log(`+++++ function name ${name} input ${input}`);
        const result = fn(input);
        console.log(`+++++ done`, result);
        return result;
    }
}

const add3: IFnGeneral = (input) => {
    return input+3;
}

const add7: IFnGeneral = (input) => {
    return input+7;
}

const add9: IFnGeneral = (input) => {
    return input+9;
}


const fnList: IFnGeneral[] = [
    decorator('add3', add3),
    decorator('add7', add7),
    decorator('add9', add9),
]


function main() {
    fnList.forEach((fn, index:number) => {
        console.log(
            `answer for #${index}`,
            fn(
                Math.floor((Math.random() * 100))
            )
        )
    })
}

main();