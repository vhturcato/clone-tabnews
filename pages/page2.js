import Link from 'next/link';

function Page2 (){
    return (
        <h1 className={styles.title}>
  Index <Link href="/index.js"> Index</Link>
</h1>
    )
}

export default Page2;