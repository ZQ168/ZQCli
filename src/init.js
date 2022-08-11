import child from 'child_process';
import symbol from 'log-symbols';
import chalk from 'chalk';

import ora from 'ora';
const util = require( "util" );
const exec = util.promisify( require( "child_process" ).exec );

import { updateJsonFile } from './util.js';

let init = async ( usernme, token ) =>
{
    try
    {
        await loadCmd( 'git init', 'init   --' )
        if ( username === '' || token === '' )
        {
            console.log(symbol.warning, chalk.yellow('缺少入参无法创建远端仓库'))
        } else
        {
            const projectName = process.cwd().split( '/' ).slice( -1 )[ 0 ];
           
        }
    } catch ( err )
    {
        console.log( symbol.error, chalk.red( '初始化失败' ) )
        console.log( symbol.error, chalk.red( err ) )
        process.exit(1)
    }
}