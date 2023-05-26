{include file='Templates/header.tpl'}


<div class="introduccion">
    <h2>Locales y restaurantes en Tandil</h2>
    <p>La siguiente tabla muestra los locales y restaurantes dentro de la ciudad de Tandil, que disponen de
        productos y menues aptos para celiacos.</p>
</div>

<div class="centrarTabla">
    <table class="todaTabla">
        <Thead>
            <tr>
                <th>Nombre del Negocio</th>
                <th>Calle</th>
                <th>Telefono</th>
                <th>Redes Sociales</th>
                <th>Tipo de negocio</th>
            </tr>
        </Thead>
        <tbody>
            {foreach from=$locales item=$local}
                <tr>

                    <td id="nombreDelNegocio">{$local->nombre_del_negocio}</td>
                    <td id="direccion">{$local->direccion}</td>
                    <td id="telefono">{$local->telefono}</td>
                    <td id="redesSociales">{$local->redes_sociales}</td>
                    <td id="tipoDeNegocio">{$local->tipo_de_negocio}</td>
                    <td>

                </tr>
            {/foreach}
        </tbody>
    </table>
</div>


{include file='Templates/footer.tpl'}