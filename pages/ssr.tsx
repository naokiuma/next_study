import {GetServerSideProps,NextPage} from 'next'
import Head from 'next/head'

type SSRProps = {
    message:string
}

const SSR:NextPage<SSRProps> = (props) => {
    const {message} = props

    return (
        <div>
            <Head>
                <title>create Next App</title>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <main>
                <p>このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです。</p>
            </main>
            <p>{message}</p>
        </div>
    )
}

//getServerSidepropsは、ページへのリクエストがあるたびに実行される
export const getServerSideProps:GetServerSideProps<SSRProps> = async (
    context
) => {
    console.log(context)
    const timestamp = new Date();
    const message = `${timestamp}にこのページの描写が実行されました`
    console.log(message)

    return {
        // ここで返したpropsを元にページコンポーネントを描画する
        props:{
            message
        },
    }
}

export default SSR
