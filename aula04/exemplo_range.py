#exemplo de usos da função range

#passo somente um parametro (stop) parada, 
# inicia no 0 e para um antes do stop
print("range com 1 parametro")
for i in range(5):    
	print(i) #saida 0,1,2,3,4
	
#passo somente dois parametro (start,stop)começo e parada, 
# faz passo 1 a 1
print("\nrange com 2 parametros")
for i in range(1,5):    
	print(i) #saida 1,2,3,4
	
#passo tres parametro (start,stop,step)começo,parada e passo, 
print("\nrange com 3 parametros")
for i in range(0,10,2):    
	print(i) #saida 0,2,4,6,8