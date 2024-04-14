import { React } from 'react';

const Container = ({ children }) => (
    <div style = {StyleSheet.container}>
        { children }
    </div>
)

const styles = {
    container: {
        margin: '0 auto',
        padding: '50px 100px'
    }
}

export default container;