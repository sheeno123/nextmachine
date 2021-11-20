(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return re}});var r,a=n(318),s=n(9008),i=n(7294),c=n(4526),o=n(266),u=n(5523),l=n(809),p=n.n(l),f=n(9496),m=n(9476),d=n(3029),x=n(3789),g=n(5885),b=n(164);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var h=function(){var e=(0,o.Z)(p().mark((function e(t,n,a,s){var i,c,o,u,l,f,m,d,h,v,y,w,S,P,T=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=T.length>4&&void 0!==T[4]?T[4]:r.Parallel,c=T.length>5&&void 0!==T[5]?T[5]:"singleGossip",o=T.length>6?T[6]:void 0,n.publicKey){e.next=5;break}throw new b.oS;case 5:if(u=[],o){e.next=10;break}return e.next=9,t.getRecentBlockhash(c);case 9:o=e.sent;case 10:l=function(e){var t=a[e],r=s[e];if(0===t.length)return"continue";var i=new g.Transaction;t.forEach((function(e){return i.add(e)})),i.recentBlockhash=o.blockhash,i.setSigners.apply(i,[n.publicKey].concat((0,x.Z)(r.map((function(e){return e.publicKey}))))),r.length>0&&i.partialSign.apply(i,(0,x.Z)(r)),u.push(i)},f=0;case 12:if(!(f<a.length)){e.next=19;break}if("continue"!==l(f)){e.next=16;break}return e.abrupt("continue",16);case 16:f++,e.next=12;break;case 19:return e.next=21,n.signAllTransactions(u);case 21:m=e.sent,d=[],h={breakEarly:!1,i:0},console.log("Signed txns length",m.length,"vs handed in length",a.length),v=[],y=0;case 27:if(!(y<m.length)){e.next=60;break}return w=k({connection:t,signedTransaction:m[y]}),e.prev=29,e.next=32,w;case 32:S=e.sent,P=S.txid,v.push(P),e.next=42;break;case 37:e.prev=37,e.t0=e.catch(29),console.error(e.t0),failCallback(m[y],y),i===r.StopOnFailure&&(h.breakEarly=!0,h.i=y);case 42:if(i===r.Parallel){e.next=56;break}return e.prev=43,e.next=46,w;case 46:e.next=54;break;case 48:if(e.prev=48,e.t1=e.catch(43),console.log("Caught failure",e.t1),!h.breakEarly){e.next=54;break}return console.log("Died on ",h.i),e.abrupt("return",h.i);case 54:e.next=57;break;case 56:d.push(w);case 57:y++,e.next=27;break;case 60:if(i===r.Parallel){e.next=63;break}return e.next=63,Promise.all(d);case 63:return e.abrupt("return",v);case 64:case"end":return e.stop()}}),e,null,[[29,37],[43,48]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),v=function(){return(new Date).getTime()/1e3},y=15e3;function k(e){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)(p().mark((function e(t){var n,r,a,s,i,c,u,l,f,m,d,x,g;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,s=void 0===a?y:a,i=n.serialize(),c=v(),u=0,e.next=6,r.sendRawTransaction(i,{skipPreflight:!0});case 6:return l=e.sent,console.log("Started awaiting confirmation for",l),f=!1,(0,o.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(v()-c<s)){e.next=6;break}return r.sendRawTransaction(i,{skipPreflight:!0}),e.next=4,R(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,T(l,s,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:u=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return d=null,e.prev=28,e.next=31,S(r,n,"single");case 31:d=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!d||!d.err){e.next=47;break}if(!d.logs){e.next=46;break}x=d.logs.length-1;case 39:if(!(x>=0)){e.next=46;break}if(!(g=d.logs[x]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+g.slice("Program log: ".length));case 43:--x,e.next=39;break;case 46:throw new Error(JSON.stringify(d.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",l,v()-c),e.abrupt("return",{txid:l,slot:u});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function S(e,t,n){return P.apply(this,arguments)}function P(){return(P=(0,o.Z)(p().mark((function e(t,n,r){var a,s,i,c,o;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),s=n._serialize(a),i=s.toString("base64"),c=[i,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",c);case 10:if(!(o=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+o.error.message);case 13:return e.abrupt("return",o.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,n){return K.apply(this,arguments)}function K(){return(K=(0,o.Z)(p().mark((function e(t,n,r){var a,s,i,c,u,l=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"recent",s=l.length>4&&void 0!==l[4]&&l[4],i=!1,c={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=(0,o.Z)(p().mark((function e(l,f){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){i||(i=!0,console.log("Rejecting for timeout..."),f({timeout:!0}))}),n);try{u=r.onSignature(t,(function(e,t){i=!0,c={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),f(c)):(console.log("Resolved via websocket",e),l(c))}),a)}catch(m){i=!0,console.error("WS error in setup",t,m)}case 2:if(i||!s){e.next=8;break}return(0,o.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,c=n&&n.value[0],i||(c?c.err?(console.log("REST error for",t,c),i=!0,f(c.err)):c.confirmations?(console.log("REST confirmation for",t,c),i=!0,l(c)):console.log("REST no confirmations for",t,c):console.log("REST null result for",t,c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,R(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return c=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),i=!0,console.log("Returning status",c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(e){return new Promise((function(t){return setTimeout(t,e)}))},j=new f.rV.Connection("https://borgarpresale.herokuapp.com/");function E(e,t){return N.apply(this,arguments)}function N(){return(N=(0,o.Z)(p().mark((function e(t,n){var r,a,s,i,c,o;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.vK.getProgramAccounts(j,{filters:[{memcmp:{offset:326,bytes:t}}]});case 2:r=e.sent,a=[],s=0;case 5:if(!(s<r.length)){e.next=15;break}return i=r[s],e.next=9,j.getParsedAccountInfo(i.pubkey);case 9:c=e.sent,o=new m.SF(t.toString(),c.value),n?a.push(o.data):a.push(o.data.mint);case 12:s++,e.next=5;break;case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=n(8764).Buffer,A=new f.rV.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),Z=new f.rV.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),M=new f.rV.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),O=function(){var e=(0,o.Z)(p().mark((function e(t,n,r){var a,s,i,c,u,l=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"recent",s=l.length>4&&void 0!==l[4]&&l[4],i=!1,c={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=(0,o.Z)(p().mark((function e(l,f){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){i||(i=!0,console.log("Rejecting for timeout..."),f({timeout:!0}))}),n);try{u=r.onSignature(t,(function(e,t){i=!0,c={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),f(c)):(console.log("Resolved via websocket",e),l(c))}),a)}catch(m){i=!0,console.error("WS error in setup",t,m)}case 2:if(i||!s){e.next=8;break}return(0,o.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,c=n&&n.value[0],i||(c?c.err?(console.log("REST error for",t,c),i=!0,f(c.err)):c.confirmations?(console.log("REST confirmation for",t,c),i=!0,l(c)):console.log("REST no confirmations for",t,c):console.log("REST null result for",t,c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,R(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return c=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),i=!0,console.log("Returning status",c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),V=function(e,t,n,r){var a=[{pubkey:t,isSigner:!0,isWritable:!0},{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:f.rV.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:d.H_,isSigner:!1,isWritable:!1},{pubkey:f.rV.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new f.rV.TransactionInstruction({keys:a,programId:Z,data:_.from([])})},L=function(){var e=(0,o.Z)(p().mark((function e(t,n,r){var a,s,i,c,o,u,l,m,d;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new f.zt(r,t,{preflightCommitment:"recent"}),e.next=3,f.$r.fetchIdl(A,a);case 3:if(!(s=e.sent)){e.next=18;break}return i=new f.$r(s,A,a),c={id:n,connection:r,program:i},e.next=9,i.account.candyMachine.fetch(n);case 9:return o=e.sent,u=o.data.itemsAvailable.toNumber(),l=o.itemsRedeemed.toNumber(),m=u-l,d=o.data.goLiveDate.toNumber(),d=new Date(1e3*d),e.abrupt("return",{candyMachine:c,itemsAvailable:u,itemsRedeemed:l,itemsRemaining:m,goLiveDate:d});case 18:throw new Error("Fetching idl returned null: check CANDY_MACHINE_PROGRAM");case 19:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.rV.PublicKey.findProgramAddress([_.from("metadata"),M.toBuffer(),t.toBuffer(),_.from("edition")],M);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=(0,o.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.rV.PublicKey.findProgramAddress([_.from("metadata"),M.toBuffer(),t.toBuffer()],M);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)(p().mark((function e(t,n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.rV.PublicKey.findProgramAddress([t.toBuffer(),d.H_.toBuffer(),n.toBuffer()],Z);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function F(e,t){return W.apply(this,arguments)}function W(){return(W=(0,o.Z)(p().mark((function e(t,n){var r,s,i,c,o,u,l,x,g,b,h,v;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("6uQr2marhVz1WQkZGQr2UwPp11oo9hNLZ6wZm99WDkz4");case 2:return r=e.sent,s=[],e.next=6,t.getParsedTokenAccountsByOwner(n,{programId:d.H_});case 6:i=e.sent,c=0;case 8:if(!(c<i.value.length)){e.next=33;break}if(o=i.value[c],"1"!=(u=o.account.data.parsed.info.tokenAmount).amount||"0"!=u.decimals||!r.includes(o.account.data.parsed.info.mint)){e.next=30;break}return e.next=14,f.rV.PublicKey.findProgramAddress([_.from("metadata"),M.toBuffer(),new f.rV.PublicKey(o.account.data.parsed.info.mint).toBuffer()],M);case 14:return l=e.sent,x=(0,a.Z)(l,1),g=x[0],e.next=19,t.getParsedAccountInfo(g);case 19:return b=e.sent,h=new m.SF(n.toString(),b.value),e.next=23,fetch(h.data.data.uri);case 23:if(200!==(v=e.sent).status){e.next=30;break}return e.t0=s,e.next=28,v.json();case 28:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 30:c++,e.next=8;break;case 33:return e.abrupt("return",s);case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=(0,o.Z)(p().mark((function e(t,n,r,a){var s,i,c,o,u,l,m;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=f.rV.Keypair.generate(),e.next=3,C(r,s.publicKey);case 3:return i=e.sent,c=t.connection,o=t.program,e.next=7,D(s.publicKey);case 7:return u=e.sent,e.next=10,B(s.publicKey);case 10:return l=e.sent,e.next=13,c.getMinimumBalanceForRentExemption(d.qT.span);case 13:return m=e.sent,e.next=16,o.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:u,masterEdition:l,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:M,tokenProgram:d.H_,systemProgram:f.rV.SystemProgram.programId,rent:f.rV.SYSVAR_RENT_PUBKEY,clock:f.rV.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[f.rV.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:d.qT.span,lamports:m,programId:d.H_}),d.WU.createInitMintInstruction(d.H_,s.publicKey,0,r,r),V(i,r,r,s.publicKey),d.WU.createMintToInstruction(d.H_,s.publicKey,i,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),U=function(){var e=(0,o.Z)(p().mark((function e(t,n,r,a){var s,i,c,o,u,l,m,x,g,b,v,y,k=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=k.length>4&&void 0!==k[4]?k[4]:2,i=[],c=[],o=0;case 4:if(!(o<s)){e.next=31;break}return u=f.rV.Keypair.generate(),e.next=8,C(r,u.publicKey);case 8:return l=e.sent,m=t.connection,e.next=12,m.getMinimumBalanceForRentExemption(d.qT.span);case 12:return x=e.sent,g=[f.rV.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:u.publicKey,space:d.qT.span,lamports:x,programId:d.H_}),d.WU.createInitMintInstruction(d.H_,u.publicKey,0,r,r),V(l,r,r,u.publicKey),d.WU.createMintToInstruction(d.H_,u.publicKey,l,r,[],1)],e.next=16,B(u.publicKey);case 16:return b=e.sent,e.next=19,D(u.publicKey);case 19:return v=e.sent,e.t0=g,e.next=23,t.program.instruction.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:u.publicKey,metadata:v,masterEdition:b,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:M,tokenProgram:d.H_,systemProgram:f.rV.SystemProgram.programId,rent:f.rV.SYSVAR_RENT_PUBKEY,clock:f.rV.SYSVAR_CLOCK_PUBKEY}});case 23:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),y=[u],i.push(y),c.push(g);case 28:o++,e.next=4;break;case 31:return e.next=33,h(t.program.provider.connection,t.program.provider.wallet,c,i);case 33:return e.abrupt("return",e.sent);case 34:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),H=n(8279),Y=n(7627),q=n(7730),z=new f.rV.PublicKey("DGiduh24iG7w8tLKm6kddcu5KShghcGHiMiYgeTruLvR"),G=new f.rV.PublicKey("EURNTDzEzrcHFYa5rhySLHoMYxcrNPNyTcFnWUFnqJXB"),Q=new f.rV.PublicKey("6uQr2marhVz1WQkZGQr2UwPp11oo9hNLZ6wZm99WDkz4"),J=new f.rV.Connection("https://borgarpresale.herokuapp.com/");var X=n(8130),$=new f.rV.Connection("https://borgarpresale.herokuapp.com/"),ee=function(){var e=(0,Y.Os)(),t=(0,i.useState)(!1),n=t[0],r=t[1],a=(0,i.useState)([]),s=a[0],c=a[1];return(0,i.useEffect)((function(){(0,o.Z)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e.publicKey&&e.signAllTransactions&&e.signTransaction){t.next=2;break}return t.abrupt("return");case 2:return r(!0),t.next=5,F($,e.publicKey);case 5:n=t.sent,c(n),r(!1);case 8:case"end":return t.stop()}}),t)})))()}),[e]),[n,s]},te=n(5893);function ne(e){var t=e.nft;return(0,i.useEffect)((function(){console.log(t)}),[]),(0,te.jsxs)("div",{className:"flex flex-col w-1/4 p-3 border-2 border-black",children:[(0,te.jsx)("img",{src:t.image,alt:t.description||t.name}),(0,te.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,te.jsx)("p",{children:t.name}),(0,te.jsx)("p",{className:"font-bold",children:t.symbol})]})]})}function re(){var e=(0,q.Z)(),t=(0,a.Z)(e,1)[0],n=function(){var e,t=(0,q.Z)(),n=(0,a.Z)(t,2)[1],r=(0,i.useState)(),s=r[0],c=r[1],l=(0,Y.Os)(),f=(0,i.useState)((e={itemsRemaining:0,itemsRedeemed:0,itemsAvailable:0},(0,u.Z)(e),e)),m=f[0],d=f[1],x=(0,i.useState)(!1),b=x[0],h=x[1],v=(0,i.useState)(!1),y=v[0],k=v[1],w=(0,i.useState)(new Date(parseInt("1634619600",10))),S=w[0],P=w[1];return(0,i.useEffect)((function(){(0,o.Z)(p().mark((function e(){var t,n,r,a,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&l.publicKey&&l.signAllTransactions&&l.signTransaction){e.next=2;break}return e.abrupt("return");case 2:return t={publicKey:l.publicKey,signAllTransactions:l.signAllTransactions,signTransaction:l.signTransaction},e.next=5,L(t,Q,J);case 5:n=e.sent,r=n.candyMachine,a=n.goLiveDate,s=n.itemsRemaining,k(0===s),P(a),c(r);case 12:case"end":return e.stop()}}),e)})))()}),[l,Q,J]),(0,i.useEffect)((function(){(0,o.Z)(p().mark((function e(){var t,n,r,a,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=9;break}return t={publicKey:l.publicKey,signAllTransactions:l.signAllTransactions,signTransaction:l.signTransaction},e.next=4,L(t,Q,J);case 4:n=e.sent,r=n.itemsRemaining,a=n.itemsRedeemed,s=n.itemsAvailable,d({itemsRemaining:r,itemsRedeemed:a,itemsAvailable:s});case 9:case"end":return e.stop()}}),e)})))()}),[l,Q,J,b]),{isSoldOut:y,mintStartDate:S,isMinting:b,nftsData:m,startMint:function(){var e=(0,o.Z)(p().mark((function e(){var t,r,a,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(!0),!(l.connected&&null!==s&&void 0!==s&&s.program&&l.publicKey)){e.next=10;break}return e.next=5,I(s,G,l.publicKey,z);case 5:return t=e.sent,e.next=8,O(t,3e4,J,"singleGossip",!1);case 8:null!==(r=e.sent)&&void 0!==r&&r.err?H.ZP.error("Mint failed! Please try again!"):H.ZP.success("Congratulations! Mint succeeded! Check your wallet :)");case 10:e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),a=e.t0.message||"Minting failed! Please try again!",e.t0.message?311===e.t0.code?(a="SOLD OUT!",k(!0)):312===e.t0.code&&(a="Minting period hasn't started yet."):e.t0.message.indexOf("0x138")||(e.t0.message.indexOf("0x137")?a="SOLD OUT!":e.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),H.ZP.error(a);case 17:if(e.prev=17,null===l||void 0===l||!l.publicKey){e.next=23;break}return e.next=21,J.getBalance(null===l||void 0===l?void 0:l.publicKey);case 21:i=e.sent,n(i/g.LAMPORTS_PER_SOL);case 23:return h(!1),e.finish(17);case 25:case"end":return e.stop()}}),e,null,[[0,12,17,25]])})));return function(){return e.apply(this,arguments)}}(),startMintMultiple:function(){var e=(0,o.Z)(p().mark((function e(t){var r,a,i,c,o,u,f,m,d,x,b,v,y,w;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(!0),!(l.connected&&null!==s&&void 0!==s&&s.program&&l.publicKey)){e.next=37;break}return e.next=5,J.getBalance(null===l||void 0===l?void 0:l.publicKey);case 5:return e.t0=e.sent,e.t1=g.LAMPORTS_PER_SOL,r=e.t0/e.t1,a=r-1*t,e.next=11,U(s,G,l.publicKey,z,t);case 11:for(i=e.sent,c=[],o=0;o<i.length;o++)u=i[o],c.push(O(u,3e4,J,"singleGossip",!0));return e.next=16,Promise.all(c);case 16:for(f=e.sent,m=0,d=0,x=0;x<f.length;x++)null!==(b=f[x])&&void 0!==b&&b.err?d+=1:m+=1;return e.next=22,J.getBalance(null===l||void 0===l?void 0:l.publicKey);case 22:e.t2=e.sent,e.t3=g.LAMPORTS_PER_SOL,v=e.t2/e.t3;case 25:if(!(v>a)){e.next=35;break}return e.next=28,R(1e3);case 28:return e.next=30,J.getBalance(null===l||void 0===l?void 0:l.publicKey);case 30:e.t4=e.sent,e.t5=g.LAMPORTS_PER_SOL,v=e.t4/e.t5,e.next=25;break;case 35:m&&H.ZP.success("Congratulations! ".concat(m," mints succeeded! Your NFT's should appear in your wallet soon :)"),{duration:6e3,position:"bottom-center"}),d&&H.ZP.error("Some mints failed! ".concat(d," mints failed! Check your wallet :("),{duration:6e3,position:"bottom-center"});case 37:e.next=44;break;case 39:e.prev=39,e.t6=e.catch(0),y=e.t6.message||"Minting failed! Please try again!",e.t6.message?311===e.t6.code?(y="SOLD OUT!",k(!0)):312===e.t6.code&&(y="Minting period hasn't started yet."):e.t6.message.indexOf("0x138")||(e.t6.message.indexOf("0x137")?y="SOLD OUT!":e.t6.message.indexOf("0x135")&&(y="Insufficient funds to mint. Please fund your wallet.")),H.ZP.error(y);case 44:if(e.prev=44,null===l||void 0===l||!l.publicKey){e.next=50;break}return e.next=48,J.getBalance(null===l||void 0===l?void 0:l.publicKey);case 48:w=e.sent,n(w/g.LAMPORTS_PER_SOL);case 50:return h(!1),e.finish(44);case 52:case"end":return e.stop()}}),e,null,[[0,39,44,52]])})));return function(t){return e.apply(this,arguments)}}()}}(),r=n.isSoldOut,l=n.mintStartDate,f=n.isMinting,m=n.startMint,d=n.startMintMultiple,x=n.nftsData,b=ee(),h=(0,a.Z)(b,2),v=(h[0],h[1]),y=(0,Y.Os)().connected,k=(0,i.useState)(!1),w=(k[0],k[1]);(0,i.useEffect)((function(){new Date(l).getTime()<Date.now()&&w(!0)}),[]);var S=function(){var e=(0,i.useState)(5),t=e[0],n=e[1];return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("button",{onClick:function(){return d(t)},disabled:f,className:"px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600",children:f?"loading":"mint ".concat(t)}),(0,te.jsx)("input",{disabled:f,type:"number",min:2,max:10,className:"px-2 mx-auto mt-5 font-bold text-white bg-gray-500",value:t,onChange:function(e){return n(e.target.value)}}),(0,te.jsx)("p",{className:"mx-auto mt-2",children:"min 2; max 10;"})]})};return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsxs)(s.default,{children:[(0,te.jsx)("title",{children:"next-candy-machine"}),(0,te.jsx)("meta",{name:"description",content:"Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"}),(0,te.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,te.jsxs)("div",{className:"flex flex-col items-center min-h-screen mx-6",children:[(0,te.jsx)(H.x7,{}),(0,te.jsxs)("div",{className:"flex items-center justify-between w-full mt-3",children:[(0,te.jsx)("h1",{className:"text-2xl font-bold",children:"next-candy-machine"}),(0,te.jsxs)("div",{className:"flex items-center",children:[y&&(0,te.jsxs)("div",{className:"flex items-end mr-2",children:[(0,te.jsx)("p",{className:"text-xs text-gray-400",children:"balance"}),(0,te.jsx)("p",{className:"mx-1 font-bold leading-none",children:t.toFixed(2)}),(0,te.jsx)("p",{className:"font-bold leading-none text-transparent bg-clip-text",style:{backgroundImage:"linear-gradient(to bottom right, #00FFA3, #03E1FF, #DC1FFF)"},children:"SOL"})]}),(0,te.jsx)(c.aD,{})]})]}),y&&(0,te.jsxs)("p",{className:"mr-auto text-sm",children:[(0,te.jsx)("span",{className:"font-bold",children:"Available/Minted/Total:"})," ",x.itemsRemaining,"/",x.itemsRedeemed,"/",x.itemsAvailable]}),(0,te.jsx)("div",{className:"flex items-start justify-center w-11/12 my-10",children:y?(0,te.jsx)(te.Fragment,{children:new Date(l).getTime()<Date.now()?(0,te.jsx)(te.Fragment,{children:r?(0,te.jsx)("p",{children:"SOLD OUT"}):(0,te.jsxs)(te.Fragment,{children:[(0,te.jsxs)("div",{className:"flex flex-col w-1/2",children:[(0,te.jsx)("h1",{className:"mb-10 text-3xl font-bold",children:"Mint One"}),(0,te.jsx)("button",{onClick:m,disabled:f,className:"px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600",children:f?"loading":"mint 1"})]}),(0,te.jsxs)("div",{className:"flex flex-col w-1/2",children:[(0,te.jsx)("h1",{className:"mb-10 text-3xl font-bold",children:"Mint Many"}),(0,te.jsx)(S,{})]})]})}):(0,te.jsx)(X.ZP,{date:l,onMount:function(e){return e.completed&&w(!0)},onComplete:function(){return w(!0)}})}):(0,te.jsx)("p",{children:"connect wallet to mint"})}),(0,te.jsxs)("div",{className:"flex flex-col w-full",children:[(0,te.jsx)("h2",{className:"text-2xl font-bold",children:"My NFTs"}),(0,te.jsx)("div",{className:"flex mt-3 gap-x-2",children:v.map((function(e,t){return(0,te.jsx)(ne,{nft:e},t)}))})]})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6483)}])}},function(e){e.O(0,[774,870,526,718,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);