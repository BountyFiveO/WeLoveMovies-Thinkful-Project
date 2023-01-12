

function Footer() {
    const style = {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        height: "25px",
        backgroundColor: "#2a2b2b",
        color: "white",
        textAlign: "center",
        fontSize: "16px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",

    };


    return (
        
        <footer style={style}> 
            Copyright &copy; We Love Movies Backend by EngineerPatterson
        </footer>
   
       
    );
}




export default Footer;