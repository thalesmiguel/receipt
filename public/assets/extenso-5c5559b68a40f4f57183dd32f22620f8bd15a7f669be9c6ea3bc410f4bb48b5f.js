String.prototype.extenso=function(e){for(var t,n,r,i,o,a,s=[["zero","um","dois","tr\xeas","quatro","cinco","seis","sete","oito","nove","dez","onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove"],["dez","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa"],["cem","cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos"],["mil","milh\xe3o","bilh\xe3o","trilh\xe3o","quadrilh?o","quintilh?o","sextilh?o","setilh?o","octilh?o","nonilh?o","decilh?o","undecilh?o","dodecilh?o","tredecilh?o","quatrodecilh?o","quindecilh?o","sedecilh?o","septendecilh?o","octencilh?o","nonencilh?o"]],n=this.replace(e?/[^,\d]/g:/\D/g,"").split(","),u=" e ",l="real",c="centavo",d=n.length-1,f=-1,p=[],h=[],g="";++f<=d;h=[])if(f&&(n[f]=(1*("."+n[f])).toFixed(2).slice(2)),(t=(r=n[f]).slice((a=r.length)%3).match(/\d{3}/g),r=a%3?[r.slice(0,a%3)]:[],r=t?r.concat(t):r).length){for(t=-1,a=r.length;++t<a;g="")(i=1*r[t])&&(20>i%100&&(g+=s[0][i%100])||i%100+1&&(g+=s[1][(i%100/10>>0)-1]+(i%10?u+s[0][i%10]:"")),h.push((100>i?g:i%100?s[2][i/100>>0]+u+g:s[2][100==i?0:i/100>>0])+((g=a-t-2)>-1?" "+(i>1&&g>0?s[3][g].replace("?o","?es"):s[3][g]):"")));t=(o=h.length)>1?(t=h.pop(),h.join(" ")+u+t):h.join("")||(!f&&1*n[f+1]>0||p.length?"":s[0][0]),t&&p.push(t+(e?" "+(1*r.join("")>1?f?c+"s":(/0{6,}$/.test(n[0])?"de ":"")+l.replace("l","is"):f?c:l):""))}return p.join(u)};