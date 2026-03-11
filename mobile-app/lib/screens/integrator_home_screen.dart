import 'package:flutter/material.dart';

class IntegratorHomeScreen extends StatelessWidget {
  const IntegratorHomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final features = [
      'Receber leads',
      'Gerenciar projetos',
      'Criar propostas',
      'Monitorar instalações'
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('App Integrador')),
      body: ListView.builder(
        itemCount: features.length,
        itemBuilder: (context, index) => Card(
          child: ListTile(
            leading: const Icon(Icons.engineering),
            title: Text(features[index]),
          ),
        ),
      ),
    );
  }
}
