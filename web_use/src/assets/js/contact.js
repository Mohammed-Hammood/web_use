
const contactStyle = {
    display:"grid",
    justifyCotent:"center",
    justifyItems:"center",
    padding:"10px"
}

function Contact(){
    return (<div style={contactStyle}>
       
        <h2>Свяжитесь с нами</h2>

        <p>У вас есть вопросы о сроках или вы просто хотите уточнить, какого чёрта мы там вообще делаем? </p>

        <p>Не стесняйтесь, звоните или пишите</p>

        <p>+7 812 642-88-12</p>
        <p>info@webuse.pro</p>

       
    </div>)
}
export default Contact;