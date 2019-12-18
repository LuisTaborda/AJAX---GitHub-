var url = "https://api.github.com/users/";
var inputElement = document.querySelector('input[name=username]');
var btnElement = document.querySelector('button.botao');
var tableElement = document.querySelector('#table');
var listRepositories;
btnElement.onclick = function(){
    tableElement.innerHTML="";
    requestUser(inputElement.value);
}

function requestUser(username){
    return axios.get(url+username+"/repos")
        .then(function(response){
                 /* Criação dos titulos da tabela */
                 var thn = document.createElement('th');
                 var thnt = document.createTextNode("Nome Repositório");
                 thn.appendChild(thnt);
                 tableElement.appendChild(thn);
 
                 var thd = document.createElement('th');
                 var thdt = document.createTextNode("Descrição");
                 thd.appendChild(thdt);
                 tableElement.appendChild(thd);
 
                 var thl = document.createElement('th');
                 var thlt = document.createTextNode("Linguagem");
                 thl.appendChild(thlt);
                 tableElement.appendChild(thl);
 
                 var thl = document.createElement('th');
                 var thlt = document.createTextNode("Link");
                 thl.appendChild(thlt);
                 tableElement.appendChild(thl);
            listRepositories = response.data;
            for (item of listRepositories){

                console.log(item);
                var row = document.createElement('tr');

                var nome = document.createElement('td');
                var nomeText = document.createTextNode(item.name);

                var desc = document.createElement('td');
                var descText = document.createTextNode(item.description);

                var lang = document.createElement('td');
                var langText = document.createTextNode(item.language);

                var url = document.createElement('td');
                var link = document.createElement('a');
                var svn_url = document.createTextNode(item.svn_url);
                link.setAttribute('href', svn_url);
                
                nome.appendChild(nomeText);
                desc.appendChild(descText);
                lang.appendChild(langText);
                url.appendChild(link);
                link.appendChild(svn_url);
                row.appendChild(nome);
                row.appendChild(desc);
                row.appendChild(lang);
                row.appendChild(url);
                
                tableElement.appendChild(row);
               
            }
        })
        .catch(function(error) {
            console.warn(error);
            alert(error + " - Usuário Inválido!");  
        }
        );
}



