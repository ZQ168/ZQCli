import fs from 'fs';
import symbol from 'log-symbols';
import chalk from 'chalk';
import inquirer from 'inquirer';
import downloadGit from 'download-git-repo';


let notExitFold = async ( name ) =>
{
    return new Promise( ( resolve ) =>
    {
        if ( fs.existsSync( name ) )
        {
            console.log(symbol.error, chalk.red('占用，重新创建'))
        } else
        {
            resolve()
        }
    })
}

let promptList = [
    {
        type: 'list',
        name: 'frame',
        message: 'please choose this project template',
        choices: [ 'vue', 'react' ]
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the project description:'
    },
    {
        type: 'input',
        name: 'author',
        message: 'please enter the author name'
    }
];

let prompt = () =>
{
    return new Promise( resolve =>
    {
        inquirer.prompt(promptList).then(answer => resolve(answer))
    })
}

let updateJsonFile = ( fileName, obj ) =>
{
    return new Promise( resolve =>
    {
        if ( fs.existsSync( fileName ) )
        {
            const data = fs.readFileSync( fileName ).toString();
            let json = JSON.parse( data );
            Object.keys( obj ).forEach( key =>
            {
                json[ key ] = obj[ key ]
            } );
            fs.writeFileSync( fileName, JSON.stringify( json, null, '\t' ), 'utf-8' );
            resolve()
        }
    })
}

module.exports = {
    notExitFold,
    prompt,
    downloadTemplate,
    updateJsonFile
}