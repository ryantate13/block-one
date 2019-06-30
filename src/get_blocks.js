export default async function get_blocks(){
    const blocks_info = await fetch('https://api.eosnewyork.io/v1/chain/get_info').then(r => r.json())
}
