import React, {ChangeEvent, MouseEvent} from 'react';

const callback = ():number => {
   // alert('key')
    return 12
}

window.setTimeout(callback,1000)




export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>)=> {

        alert(event.currentTarget.name)
    }

    const saveUser = ()=> {
        alert('user has been saved ')
    }

    const nameChanged = ()=> {
        console.log('nameChanged')
    }
    const ageChanged= (event:ChangeEvent<HTMLInputElement>)=> {
        console.log('ageChanged: ' + event.currentTarget.value)
    }
    const focusLost= ()=> {
        console.log('focusLost')
    }
    return <div><textarea onChange={nameChanged} onBlur={focusLost}>Aisylu</textarea>
        <input onChange={ageChanged} type="number"/>


        <button name={'delete'} onClick={deleteUser}>x</button>
        <button onClick={saveUser}>save</button>


        <button name={'hey'}onClick={deleteUser}>x</button>
        {/*<div onClick={deleteUser}>delete</div>*/}
        <div onClick={saveUser}>save</div>
    </div>
}

