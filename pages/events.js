import Batikimg from "../components/Batikimg";
import Titleimg from "../components/Titleimg";
import Layout from './../components/Layout';

function events() {

    return (
        <div>
            <Layout>
            <div>
                <Titleimg imgsrc="./img/event002.jpg">
                    <h1 className= "font-bold text-4xl m-2" >Our Events.</h1>
                    <h4 className="text-lg">We are each other's magnitude and bond.</h4>
                </Titleimg>
                <Batikimg imgsrc="/img/event004.jpg" batiksrc="/img/batik2.jpg">

                </Batikimg>
            </div>
            </Layout> 
        </div>

    )
}

export default events
