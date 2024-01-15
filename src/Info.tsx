import { Owner, Pet } from './model/pet';
import React from 'react';

// 이곳에서만 쓰이는 props type
interface OwnProps {
    info: Pet;
    // 함수 매개변수의 타입 지정 / return type이 없는 함수: void
    changeOwner(owner: Owner): void;
}

//{}를 쓰면 좋다. 바로 타입 안의 프로퍼티를 꺼낼 수 있다!
// React Function Component에 들어오는 type지정
const Info: React.FC<OwnProps> = ({ info }) => {
    return (
        <>
            <p style={{ fontWeight: '800' }}>Info입니다</p>
            <div>{info.name}</div>
        </>
    );
};

export default Info;
