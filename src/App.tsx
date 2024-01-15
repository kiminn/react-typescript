import React, { useState } from 'react';
import './App.css';
import { Owner, Pet } from './model/pet';
import Info from './Info';
import HandMadeSnack from './HandMadeSnack';

// 이 객체에 타입을 주는 것!
// typeAlias
// 한 마디로 정의하기 어려운 객체형 타입 string? number? 직접 타입을 만들어주기
let data: Pet = {
    name: '나비',
    species: 'RussianBlue',
    age: 4,
    owner: {
        name: 'kimi',
        gender: 'female',
        age: 22,
    },
    snack: [
        { name: '츄르', price: 5000 },
        { name: '생선', price: 9900 },
        { name: '참치캔', price: 3000 },
    ],
};

const App: React.FC = () => {
    // useState = 리액트에서 제공해주는 함수. 다수의 사람들이 씀. number? string?
    // 제네릭: useState함수에 뭘 넣을지 어떻게알아?
    // useState를 부르는 순간! 타입을 지정하고 싶을때 선언
    // 앞으로 useState는 Pet타입으로 쓰이게 됩니다.
    const [myPet, setMyPet] = useState<Pet>(data);
    // owner 매개변수의 타입지정
    const changeOwner = (owner: Owner) => {
        setMyPet({ ...myPet, owner: owner });
    };
    const showHandMadeSnackName = (name: string) => {
        return name;
    };

    return (
        <>
            <Info info={myPet} changeOwner={changeOwner} />
            <HandMadeSnack name="마법의 연어큐브" showHandMadeSnackName={showHandMadeSnackName} />
        </>
    );
};

export default App;
