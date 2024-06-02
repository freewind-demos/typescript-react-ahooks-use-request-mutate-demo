import { useRequest } from "ahooks";
import React, { FC } from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
    const request = useRequest(async () => {
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(1);
            }, 1000)
        })
    }, {
        onBefore: (data) => {
            console.log("### onBefore", data);
        },
        onFinally: (data) => {
            console.log("### onFinished", data);
        },
        onSuccess: (data) => {
            console.log("### onSuccess", data);
        }
    })

    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div>
            <div>
                <button onClick={() => {
                    request.mutate(Date.now())
                }}>Mutate
                </button>
            </div>
            <div>request:
                <ul>
                    <li>loading: {JSON.stringify(request.loading)}</li>
                    <li>data: {request.data}</li>
                    <li>error: {request.error}</li>
                </ul>
            </div>
        </div>
    </div>;
}
