import  {GetStaticProps,NextPage,NextPageContext}  from 'next'
import Head from 'next/head'//nextの組み込みのコンポーネント


//ページコンポーネントのpropsの型を定義
type SSGProps = {
    message:string
}

//SSG向けページを作成
//Nextpageはnext.jsのpages用の型定義
//NextPage<props>でpropsが入るPageであると明示する

//ここでのSSGは後述のgetStaticPropsが返したpropsを「受け取れる」。
const SSG:NextPage<SSGProps> = (props) => {
    const { message } = props
    return(
        <div>
            <Head>
                <title>Static Site generation</title>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです。
                </p>
                <p>
                    {message}
                </p>
            </main>

        </div>
    )
}


//getStaticPropsはnpm run ビルド時に実行される関数
//GetStaticProps<SSGProps> は、SSGPropsを引数に取るgetStaticPropsの型
export const getStaticProps:GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}にgetStaticPropsが実行されました`
    console.log('メッセージの中身')
    console.log(message);
    console.log('ビルド時に使用されるcontextデータ')
    console.log(context);//{ locales: undefined, locale: undefined, defaultLocale: undefined } が入ってた。
    return{
        //ここで返したpropsを元にページコンポーネントを描画する。
        props:{
            message
        }
    }
}

export default SSG