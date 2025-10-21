import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'ae399d6f4f6b4d66b18781419639e0c7'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '82dff9459923458ab8ba259b7876b81f'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'bd2c07da8b7a48fd8866e9d27c10caeb'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: '607eb328774c48b8a9e9ae35242e821e'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: 'dd76a91309bf489c904f3c22b7be90bf'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9c2036ad8675404db95381b731e21685'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'eeda25d5e5224ff8b3457e852efcaaf2'
                    }
                }
            }
        }
    }
}
