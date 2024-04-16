const Container = ({ children }) => (
    <div style = {styles.container}>
        { children }
    </div>
);

const styles = {
    container: {
        margin: '0 auto',
        padding: '50px 100 px'
    }
}

export default Container 