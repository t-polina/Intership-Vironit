import io from 'socket.io-client'
const a=io('localhost:8000')
function soket () {
    return a;
}
export default soket;