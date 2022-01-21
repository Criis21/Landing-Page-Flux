import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

const CardBody = () => {
	return (
		<>
			<Container className="mb-3">
				<h2>¿Qué necesitas?</h2>
				<CardGroup className="mt-5">
					<Card>
						<Card.Body>
							<Card.Title>Top Ofertas</Card.Title>
							<Card.Text>
								<ul className="list-unstyled mt-3 mb-4">
									<li>
										HP EliteBook 840 G3 14 pulgadas Core i5
										2,3 GHz
									</li>
									<li>
										429€ - <del>1.266,00€</del>
									</li>
									<li>65% de descuento</li>
									<li>Garantía de 24 meses</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<button
								type="button"
								className="btn btn-lg btn-block btn-outline-primary ">
								¡Ya es tuyo!
							</button>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Reacondicionados</Card.Title>
							<Card.Text>
								<ul className="list-unstyled mt-3 mb-4">
									<li>iPhone XS 64 Gb - Plata - Libre</li>
									<li>
										370,00€ - <del>739,00€</del>
									</li>
									<li>40% de descuento</li>
									<li>Garantía de 24 meses</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<button
								type="button"
								className="btn btn-lg btn-block btn-outline-primary">
								Ver oferta
							</button>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Tabletas</Card.Title>
							<Card.Text>
								<ul className="list-unstyled mt-3 mb-4">
									<li>
										iPad Pro 12,9 pulgadas (2018) - WiFi
									</li>
									<li>
										740,00€ - <del>1.119,00€</del>
									</li>
									<li>33% de descuento</li>
									<li>Garantía de 24 meses</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<button
								type="button"
								className="btn btn-lg btn-block btn-outline-primary">
								Consiguelo
							</button>
						</Card.Footer>
					</Card>
				</CardGroup>
			</Container>
		</>
	);
};
export default CardBody;
