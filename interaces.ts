export interface Linea {
  id_linea: uuid;        
  fecha_creacion: Date;        
  nombre_linea: string;
  origen: string;
  destino: string;
  horario: string;
  frecuencia: string;
}


export interface Parada {
  id_parada: string;      
  id_linea: string;        
  orden: number;                    
}


export interface Horario {
  id_horario: string;     
  id_linea: string;        
  fecha_creacion: Date;       
}


export interface HorarioParada {
  id_horario_parada: string; 
  id_horario: string;        
  id_parada: string;         
  hora_llegada: string;      
  orden: number;            
}



export interface Mapa {
  id_mapa: string;        
  id_linea: string;       
  ruta_geojson: string; 
  distancia: number;      
  tiempo: number;         
  fecha_creacion: Date;      
}


export interface Usuario {
  id: number;            
  nombre: string;
  email: string;
  rol: string;
  password: string;
}
