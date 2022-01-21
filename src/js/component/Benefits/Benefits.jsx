import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Benefits = () => {
	return (
		<>
			<Container className="my-5">
				<Row>
					<h2 className="py-4 justify-content-center">
						{" "}
						Beneficios de un reacondicionado{" "}
					</h2>
					<Col xs={12} md={4}>
						<p>
							MRPhone utiliza un sistema de grados para describir
							el aspecto exterior del producto y su condición
							técnica. Todos los productos vendidos en la web son
							100% funcionales. La condición técnica simplemente
							mide la calidad del reacondicionado: la duración de
							la vida que tendrá el producto y la calidad del
							vendedor basándose en sus ventas anteriores y
							controles a los mismos. Lo explicamos bien claro
							para que sólo tengas que elegir lo que más se ajuste
							a tu criterio.
						</p>
					</Col>
					<Col xs={12} md={4}>
						<p>
							Nuestro equipo técnico de expertos realiza cada mes
							decenas de visitas a talleres reacondicionadores,
							así como pedidos anónimos en la web para asegurarse
							de que los vendedores que quieren unirse a MRPhone
							cumplen con los niveles de calidad exigidos por el
							Back Label. Una vez conseguido, todos los vendedores
							socios están en continuo seguimiento: se vigilan los
							indicadores de calidad, se analizan diariamente las
							incidencias y se limitan las ventas en caso de que
							el vendedor no cumpla los niveles exigidos.
						</p>
					</Col>
					<Col xs={12} md={4}>
						<p>
							También tenemos expertos internos que realizan
							pedidos anónimos todas las semanas. Comprueban que
							la calidad de los productos de los vendedores sea
							del nivel exigido. Si la puntuación en la calidad de
							un vendedor pierde demasiados puntos, se pone al
							vendedor en periodo de prueba y el servicio de
							calidad lo vigila para encontrar la solución
							adecuada.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Benefits;
