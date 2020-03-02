import { GatewayConfiguration } from './gateway'

export enum EnvType {
    Local,
    Test,
    Stage
}
export function getConfiguration(forEnv: EnvType): GatewayConfiguration {
    switch (forEnv) {
        case EnvType.Local: return {
            providerURI: process.env.WEBSOCKET_PROVIDER ? process.env.WEBSOCKET_PROVIDER : "ws://taverna.pettinato.eu:8545",
            abiFile: "./contracts/EtherlessSmart.json",
            contractAddress: process.env.CONTRACT_ADDRESS ? process.env.CONTRACT_ADDRESS : "0x7B5590B24Cd0F7D2079e32B3d67c307dC95CF09D"
        }
        case EnvType.Test: return {
            providerURI: process.env.WEBSOCKET_PROVIDER ? process.env.WEBSOCKET_PROVIDER : "",
            abiFile: "./contracts/EtherlessSmart.json",
            contractAddress: process.env.CONTRACT_ADDRESS ? process.env.CONTRACT_ADDRESS : ""
        }
        case EnvType.Stage: return {
            providerURI: process.env.WEBSOCKET_PROVIDER ? process.env.WEBSOCKET_PROVIDER : "",
            abiFile: "./contracts/EtherlessSmart.json",
            contractAddress: process.env.WEBSOCKET_PROVIDER ? process.env.WEBSOCKET_PROVIDER : "",
        }
    }
}