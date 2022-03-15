import React, {useState} from "react";


function App (){
    const [value, setValue] = useState('');

    function create_button(text){
        return(
            <button onClick={() => setValue(value + text)} style={{'margin': '1px'}}>{text}</button>
        )
    }
    function calc(string){
        setValue('');
        var separators = ['+', '-', '*', '/']
        var separator;
        for (let index = 0; index < separators.length; index++){
            let i = string.indexOf(separators[index])
            if (i !== -1){
                separator = separators[index];
                break;
            }
        }
        var a  = string.split(separator);
        var left = parseInt(a[0]);
        var right = parseInt(a[1]);
        if (separator === '+'){
            alert(left + right);
        }

        else if (separator === '-'){
            alert(left - right)
        }

        else if (separator === '*'){
            alert(left * right);
        }

        else if (separator === '/'){
            alert(left / right);
        }

    }
    function create_result_button(){
        return <button onClick={() => calc(value)}>=</button>
    }

    return(
        <div>
            <div>
                <div style={{'margin':'0px'}}>
                    {create_button('1')}
                    {create_button('2')}
                    {create_button('3')}
                </div>

                <div style={{'margin':'0px'}}>
                    {create_button('4')}
                    {create_button('5')}
                    {create_button('6')}
                </div>

                <div style={{'margin':'0px'}}>
                    {create_button('7')}
                    {create_button('8')}
                    {create_button('9')}
                    {create_button('0')}
                </div>
            </div>
            <div style={{'marginTop': '5px'}}>
                {create_button('+')}
                {create_button('-')}
                {create_button('*')}
                {create_button('/')}
                {create_result_button()}

            </div>
            <div style={{'margin':'10px'}}>{value}</div>

        </div>
    );
}


export default App;
