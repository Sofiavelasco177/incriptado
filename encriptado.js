function decodificarMensajeDetallado(mensajeCodificado) {

    const reglas = {
    
        '?' : 'a',
        '[' : 'e',
        '\\': 'i',
        '~' : 'o',
        '+' : 'u',
        '¬' : 'ó',
    
        '$': 'm',
        '`': 't',
    
        '()': ' ',
    
    };
    console.log("MENSAJE ENCRIPTADO:");
        console.log("^([]`^*/^][^/-_ =(}[#$}{@*[|^^[|^^<@&}=§??$^#]}?&])^¬^^{[!*={*+[3^^@]={]]`^^!!@]#{$${] [{[]//[=@``()/!^^)$^#^^{()]==_~{}]+");
        
        console.log("\nREGLAS DE DECODIFICACIÓN QUE CONOCEMOS:");
        console.log("\n1. Vocales:");
        console.log("   ? → a");
        console.log("   [ → e");
        console.log("   \\ → i");
        console.log("   ~ → o");
        console.log("   + → u");
        console.log("   ¬ → ó");
        
        console.log("\n2. Consonantes:");
        console.log("   $ → m");
        console.log("   ` → t");
        console.log("   __ → z");
        
        console.log("\n3. Espacios:");
        console.log("   () → espacio");
        
        console.log("\n4. Palabras descubiertas:");
        console.log("   $[`? → meta");
    
    
        let mensajeProcesado = mensajeCodificado;
        
        mensajeProcesado = mensajeProcesado.replace(/__/g, 'z');
        
        Object.entries(reglas).forEach(([codigo, letra]) => {
            if (codigo !== '__') {  
                const regex = new RegExp('\\' + codigo, 'g');
                mensajeProcesado = mensajeProcesado.replace(regex, letra);
            }
        });
    
        console.log("\n5. Mensaje parcialmente decodificado:");
        console.log(mensajeProcesado);
        
    
        const caracteresRestantes = new Set(mensajeProcesado.match(/[^a-záéíóúñ\s]/g) || []);
        console.log("\n6. Caracteres aún sin decodificar:");
        caracteresRestantes.forEach(char => {
            const cantidad = mensajeProcesado.split(char).length - 1;
            if (cantidad > 0) {
                console.log(`   '${char}': aparece ${cantidad} veces`);
            }
        });
    }
    
    
    decodificarMensajeDetallado();